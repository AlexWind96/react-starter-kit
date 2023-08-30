import React, { FC } from 'react'
import { VideoEditor } from '@features/video-editor'

type ISandboxPageProps = {}

export const SandboxPage: FC<ISandboxPageProps> = () => {
  return <VideoEditor />
}
