import type { MetaFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getToolIcons } from '~/utilities/airtable.server';
import Navbar from '~/components/navbar'

export const meta: MetaFunction = () => {
  return [
    { title: "No Code Atlas" },
    { name: "description", content: "Discover the ultimate resource for all things no code. At No Code Atlas, we empower creators, entrepreneurs, and businesses to build amazing applications without writing a single line of code. Explore a wide range of no code tools, connect with a vibrant community of like-minded individuals, and stay updated with the latest trends and developments in the no code world." },
  ];
};

export const loader: LoaderFunction = async () => {
  const icons = await getToolIcons();
  return json(icons);
};

type ToolIcon = {
  id: string;
  tool: string;
  url: string;
};

export default function Index() {
  const icons = useLoaderData<ToolIcon[]>();

  const renderGridItems = (icons: ToolIcon[]) => {
    const gridItems = [];
    const columns = 24; // Set the number of columns to 24

    let iconIndex = 0; // Index to keep track of icons array
    for (let rowIndex = 0; rowIndex < Math.ceil(icons.length / (columns / 2)); rowIndex++) {
      for (let colIndex = 0; colIndex < columns; colIndex++) {
        // Determine whether to place an icon or a gray background
        const isEvenRow = rowIndex % 2 === 0;
        const isEvenCol = colIndex % 2 === 0;

        if ((isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol)) {
          // Place an icon if available
          if (iconIndex < icons.length) {
            gridItems.push(
              <div key={icons[iconIndex].id}>
                <img src={icons[iconIndex].url} alt={icons[iconIndex].tool} className="w-24 h-24 object-cover rounded-lg" />
              </div>
            );
            iconIndex++;
          } else {
            // If no icons left, place an empty cell
            gridItems.push(<div key={`empty-${rowIndex}-${colIndex}`} className="w-24 h-24 rounded-lg"></div>);
          }
        } else {
          // Place a gray background
          gridItems.push(<div key={`gray-${rowIndex}-${colIndex}`} className="bg-gray-200 dark:bg-gray-800 w-24 h-24 rounded-lg"></div>);
        }
      }
    }

    return gridItems;
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="py-10 px-8 flex flex-col items-center">
          <div className="max-w-1200 w-full">
            <div className="flex flex-col gap-6 max-w-lg">
              <span className="italic text-gray-400">Coming Soon</span>
              <p className="text-base font-medium">Your comprehensive hub for everything related to no code technology including an extensive tool finder, educational classes, and a supportive community.</p>
              <h1 className="text-5xl text-gray-900 font-bold dark:text-white">Get notified when we launch</h1>
              <div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center overflow-clip">
        <div className="min-w-max">
          <div className="grid grid-cols-24 gap-4">
            {renderGridItems(icons)}
          </div>
        </div>
      </div>
    </div>
  );
}