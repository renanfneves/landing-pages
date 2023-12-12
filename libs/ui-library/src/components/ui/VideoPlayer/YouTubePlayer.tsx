'use client'

import { useMemo } from 'react'
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube'

interface YouTubePlayerProps {
  videoId: string
  autoplay?: boolean
}

export function YouTubePlayer({
  videoId,
  autoplay = false,
}: YouTubePlayerProps) {
  const onReady = (event: YouTubeEvent<unknown>) => {
    const player = event.target

    player.playVideo()
  }

  const options = useMemo((): YouTubeProps['opts'] | undefined => {
    if (!autoplay) return undefined

    return {
      playerVars: {
        autoplay: 1,
      },
    }
  }, [autoplay])

  const onError = (error: YouTubeEvent<number>) => {
    console.error('YouTube Player Error:', error)
  }

  return (
    <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
      opts={options}
    />
  )
}
