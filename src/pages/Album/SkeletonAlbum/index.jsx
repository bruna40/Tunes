import Skeleton from 'react-loading-skeleton';
import {SkeletonAlbumContainer, MusicCard } from './style.js'

export function SkeletonAlbum() {
  return (
    <SkeletonAlbumContainer>
        <div>
            <h2><Skeleton  width={100} height={30}/></h2>
            <h3><Skeleton width={100} height={20}/></h3>
        </div>
        <MusicCard>
            <h4><Skeleton width={200} height={20}/></h4>
            <h4><Skeleton width={200} height={20}/></h4>
            <div>
                <Skeleton width={330} height={30}/>
            </div>
        </MusicCard>
        <MusicCard>
            <h4><Skeleton width={200} height={20}/></h4>
            <h4><Skeleton width={200} height={20}/></h4>
            <div>
                <Skeleton width={330} height={30}/>
            </div>
        </MusicCard>
        <MusicCard>
            <h4><Skeleton width={200} height={20}/></h4>
            <h4><Skeleton width={200} height={20}/></h4>
            <div>
                <Skeleton width={330} height={30}/>
            </div>
        </MusicCard>
        <MusicCard>
            <h4><Skeleton width={200} height={20}/></h4>
            <h4><Skeleton width={200} height={20}/></h4>
            <div>
                <Skeleton width={330} height={30}/>
            </div>
        </MusicCard>
        
    </SkeletonAlbumContainer>
    
  );
}