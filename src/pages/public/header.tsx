import { IconX } from '@tabler/icons-react'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ActionIcon, Button, FileButton, Header, Title, createStyles } from '@mantine/core'
import { useAppDispatch } from '@shared/hooks'
import { videoEditorActions } from '@features/video-editor'

type IVideoEditorHeaderProps = {}

export const VideoEditorHeader: FC<IVideoEditorHeaderProps> = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const uploadVideoFile = (file: File) => {
    dispatch(videoEditorActions.uploadVideoFile(file))
  }
  const uploadImage = (file: File) => {
    dispatch(videoEditorActions.uploadImageFile(file))
  }

  return (
    <Header height={80} withBorder={false} className={classes.header}>
      <div className={'h-full flex justify-between items-center flex-wrap gap-4 px-6 py-4'}>
        <Title order={3} color={'white'} className={'flex-grow'}>
          Record video
        </Title>
        <div className={'flex gap-4'}>
          <FileButton onChange={uploadImage} accept="image/jpeg">
            {(props) => <Button {...props}>Upload image</Button>}
          </FileButton>
          <FileButton onChange={uploadVideoFile} accept="video/mp4">
            {(props) => <Button {...props}>Upload video</Button>}
          </FileButton>
        </div>
        <ActionIcon color={'gray'} onClick={() => navigate(-1)}>
          <IconX />
        </ActionIcon>
      </div>
    </Header>
  )
}

const useStyles = createStyles(() => ({
  header: {
    backgroundColor: '#293340',
    color: 'white',
    borderBottom: 'none',
    gap: '2rem',
    zIndex: 5,
  },
}))
