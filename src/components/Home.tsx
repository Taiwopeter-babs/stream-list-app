import TopRated from '@/components/TopRated';
import getConfig from '@/lib/getData';
import { Suspense } from 'react';
import New from '@/components/New';
import Trending from '@/components/Trending';
import Movies from '@/components/MovieSection/MovieSection';
import { ISectionProp } from '@/lib/types';


export default async function Home() {
  let imageConfigData;
  // get image configuration
  try {
    imageConfigData = await getConfig();
  } catch (error: any) {
    return (
      <Movies sectionName=''>
        <div>No Movie data</div>
        {/* <TopRated {...propArray[0]}/>
        <New {...propArray[1]}/>
        <Trending {...propArray[2]}/> */}
      </Movies>
    );
  }

  const backDropSize = imageConfigData.images.backdrop_sizes[1]; // lowest image size => w300

  const propArray: ISectionProp[] = [
    {backDropSize, sectionName: 'Top Rated'},
    {backDropSize, sectionName: 'Upcoming'},
    {backDropSize, sectionName: 'Trending'}
  ];
  
    
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <TopRated {...propArray[0]}/>
        <New {...propArray[1]}/>
        <Trending {...propArray[2]}/>
      </Suspense>
  )
}
