import TopRated from '@/components/Rated';
import getConfig from '@/lib/getData';
import { Suspense } from 'react';
import Upcoming from '@/components/New';
import Trending from '@/components/Trending';
import Movies from '@/components/Movie/Movie';
import { ISectionProp } from '@/lib/types';


export default async function Home() {
  let imageConfigData;
  // get image configuration
  try {
    imageConfigData = await getConfig();
  } catch (error: any) {
    return (
      <Movies sectionName='Movies'>
        <div>No Movie data</div>
      </Movies>
    )
  }
  const backDropSize = imageConfigData.images.backdrop_sizes[1] // lowest image size => w300

  const propArray: Array<ISectionProp> = [
    {backDropSize, sectionName: 'Top Rated'},
    {backDropSize, sectionName: 'Upcoming'},
    {backDropSize, sectionName: 'Popular'}
  ]
  
    
  return (
    
      <Suspense fallback={<div>Loading...</div>}>
        <TopRated {...propArray[0]}/>
        <Upcoming {...propArray[1]}/>
        <Trending {...propArray[2]}/>
      </Suspense>
  )
}
