'use client'

import { useMemo } from 'react'
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube'

interface YouTubePlayerProps {
  videoId: string
}

export function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  const playVideo = (event: YouTubeEvent<unknown>) => {
    const player = event.target

    player.setVolume(0)
    player.playVideo()
  }

  const options = useMemo((): YouTubeProps['opts'] | undefined => {
    return {
      playerVars: {
        autoplay: 1,
      },
    }
  }, [])

  const onError = (error: YouTubeEvent<number>) => {
    console.error('YouTube Player Error:', error)
  }

  return (
    <div className="relative w-full overflow-hidden aspect-video h-3/4 md:h-[350px] rounded-md">
      <YouTube
        videoId={videoId}
        onReady={playVideo}
        onEnd={playVideo}
        onError={onError}
        opts={options}
        iframeClassName="absolute top-0 left-0 w-full h-full"
      />
    </div>
  )
}
