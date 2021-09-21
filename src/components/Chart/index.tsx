import React from 'react';
import { ResponsiveLine } from '@nivo/line';

interface ChartDataItemData {
  x?: string | number | Date | null;
  y?: string | number | Date | null;
  [key: string]: any;
}
interface ChartDataItem {
  id: string | number;
  data: ChartDataItemData[];
  [key: string]: any;
}

const Chart = ({ data, className }: { data: ChartDataItem[]; className?: string }) => {
  return (
    <div className={className} style={{ height: '500px', width: '100%' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 20, bottom: 150, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear' }}
        axisTop={null}
        axisRight={null}
        pointSize={6}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        curve="natural"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 0,
            translateY: 120,
            itemsSpacing: 0,
            itemDirection: 'right-to-left',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Chart;
