// src/components/MexicoHandDrawnMap.tsx

'use client';

import { destinations, type Destination } from '@/types/destinations';
import { geoMercator, geoPath, type GeoProjection } from 'd3-geo';
import { useEffect, useMemo, useRef, useState } from 'react';
import rough from 'roughjs';
import { feature } from 'topojson-client';

const WIDTH = 1000;
const HEIGHT = 700;
const MAP_PADDING = 0;

const featuredDestinationIds = new Set([
  'cancun',
  'ciudad-de-mexico-mexico-city',
  'guadalajara',
  'oaxaca',
  'los-cabos',
  'merida',
  'puerto-vallarta',
  'san-cristobal-de-las-casas',
  'monterrey',
  'los-mochis',
  'barrancas-del-cobre',
  'ensenada'
]);

const leftSideLabelIds = new Set([
  'cancun',
  'isla-mujeres',
  'cozumel',
  'chetumal',
  'merida',
]);

type LabelOffset = {
  dx: number;
  dy: number;
  anchor?: 'start' | 'middle' | 'end';
};

const labelOffsets: Record<string, LabelOffset> = {
  'los-cabos': { dx: 16, dy: 8, anchor: 'start' },
  monterrey: { dx: 16, dy: 4, anchor: 'start' },
  'puerto-vallarta': { dx: 10, dy: 20, anchor: 'start' },

  'ciudad-de-mexico-mexico-city': { dx: -18, dy: 8, anchor: 'end' },

  merida: { dx: -18, dy: 2, anchor: 'end' },
  cancun: { dx: 16, dy: -8, anchor: 'start' },
  'chichen-itza': { dx: 16, dy: 12, anchor: 'start' },

  oaxaca: { dx: 16, dy: 6, anchor: 'start' },
  'san-cristobal-de-las-casas': { dx: 16, dy: 18, anchor: 'start' },

  guadalajara: { dx: 16, dy: 6, anchor: 'start' },
};

function getLabelOffset(destinationId: string): LabelOffset {
  return (
    labelOffsets[destinationId] ?? {
      dx: leftSideLabelIds.has(destinationId) ? -16 : 16,
      dy: 5,
      anchor: leftSideLabelIds.has(destinationId) ? 'end' : 'start',
    }
  );
}

export function MexicoHandDrawnMap() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const mapGroupRef = useRef<SVGGElement | null>(null);

  const [projection, setProjection] = useState<GeoProjection | null>(null);
  const [hovered, setHovered] = useState<Destination | null>(null);
  const [error, setError] = useState<string | null>(null);

  const projectedDestinations = useMemo(() => {
    if (!projection) return [];

    return destinations
      .map((destination) => {
        const point = projection(destination.coordinates);

        if (!point) return null;

        return {
          ...destination,
          x: point[0],
          y: point[1],
        };
      })
      .filter(Boolean) as Array<Destination & { x: number; y: number }>;
  }, [projection]);

  const hoveredDestination = useMemo(() => {
    if (!hovered) return null;

    return projectedDestinations.find(
      (destination) => destination.id === hovered.id
    );
  }, [hovered, projectedDestinations]);

  useEffect(() => {
    async function drawMap() {
      const response = await fetch('/maps/mexico.topojson');

      if (!response.ok) {
        throw new Error(`Failed to load map: ${response.status}`);
      }

      const topology = await response.json();
      const objectKey = Object.keys(topology.objects)[0];
      const geojson = feature(topology, topology.objects[objectKey]);

      const mapProjection = geoMercator().fitExtent(
        [
          [MAP_PADDING, MAP_PADDING],
          [WIDTH - MAP_PADDING, HEIGHT - MAP_PADDING],
        ],
        geojson as any
      );

      const pathGenerator = geoPath(mapProjection);

      setProjection(() => mapProjection);

      const group = mapGroupRef.current;
      const svg = svgRef.current;

      if (!group || !svg) return;

      group.innerHTML = '';

      const rc = rough.svg(svg);

      const features =
        (geojson as any).type === 'FeatureCollection'
          ? (geojson as any).features
          : [geojson];

      for (const item of features) {
        const pathData = pathGenerator(item);

        if (!pathData) continue;

        const roughPath = rc.path(pathData, {
          fill: '#f7e2b7',
          fillStyle: 'hachure',
          hachureGap: 9,
          hachureAngle: -35,
          stroke: '#1A6E8F',
          strokeWidth: 1.6,
          roughness: 1.8,
          bowing: 1.2,
        });

        group.appendChild(roughPath);
      }
    }

    drawMap().catch((err) => {
      console.error(err);
      setError(err.message);
    });
  }, []);

  return (
    <section style={{ width: '100%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        {error && (
          <p style={{ color: 'red', marginBottom: 0 }}>
            Map failed to load: {error}
          </p>
        )}

        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'visible',
          }}
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            role="img"
            aria-label="Hand-drawn map of Mexico with travel destinations"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              overflow: 'visible',
            }}
          >
            {/* Map shape layer */}
            <g ref={mapGroupRef} />

            {/* Pin layer */}
            <g>
              {projectedDestinations.map((destination) => {
                const isFeatured = featuredDestinationIds.has(destination.id);
                const isHovered = hovered?.id === destination.id;

                return (
                  <g
                    key={`pin-${destination.id}`}
                    transform={`translate(${destination.x}, ${destination.y})`}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHovered(destination)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <circle
                      r={isHovered ? 15 : isFeatured ? 11 : 7}
                      fill="#C5A253"
                      opacity={isHovered ? 0.35 : isFeatured ? 0.24 : 0.16}
                    />

                    <circle
                      r={isHovered ? 8 : isFeatured ? 6 : 4}
                      fill="#C5A253"
                      stroke="#fff7e8"
                      strokeWidth={isFeatured || isHovered ? 2 : 1.5}
                    />
                  </g>
                );
              })}
            </g>

            {/* Featured label layer */}
            <g>
              {projectedDestinations
                .filter((destination) =>
                  featuredDestinationIds.has(destination.id)
                )
                .map((destination) => {
                  const labelOffset = getLabelOffset(destination.id);

                  return (
                    <text
                      key={`label-${destination.id}`}
                      x={destination.x + labelOffset.dx}
                      y={destination.y + labelOffset.dy}
                      textAnchor={labelOffset.anchor}
                      fontSize={16}
                      fontWeight={600}
                      fontFamily="Cormorant Garamond, Georgia, serif"
                      fill="#0E4A62"
                      style={{
                        paintOrder: 'stroke',
                        stroke: '#f7f3ee',
                        strokeWidth: 5,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        userSelect: 'none',
                        pointerEvents: 'none',
                      }}
                    >
                      {destination.name}
                    </text>
                  );
                })}
            </g>

            {/* Hover label layer. This renders last, so it sits above every pin. */}
            {hoveredDestination && (
              <g>
                {(() => {
                  const labelOffset = getLabelOffset(hoveredDestination.id);

                  return (
                    <text
                      x={hoveredDestination.x + labelOffset.dx}
                      y={hoveredDestination.y + labelOffset.dy}
                      textAnchor={labelOffset.anchor}
                      fontSize={18}
                      fontWeight={700}
                      fontFamily="Cormorant Garamond, Georgia, serif"
                      fill="#0E4A62"
                      style={{
                        paintOrder: 'stroke',
                        stroke: '#f7f3ee',
                        strokeWidth: 6,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        userSelect: 'none',
                        pointerEvents: 'none',
                      }}
                    >
                      {hoveredDestination.name}
                    </text>
                  );
                })()}
              </g>
            )}
          </svg>
        </div>
      </div>
    </section>
  );
}

export default MexicoHandDrawnMap;