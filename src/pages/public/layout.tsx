import * as React from 'react'
import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { AppShell, Container, createStyles } from '@mantine/core'
import { VideoEditorHeader } from './header'

type IPublicLayoutProps = {
  header?: ReactElement
}

export const PublicLayout: FC<IPublicLayoutProps> = ({ header }) => {
  const { classes } = useStyles()
  return (
    <AppShell
      classNames={{ main: classes.main }}
      padding={0}
      header={<VideoEditorHeader />}
      layout={'alt'}
    >
      <Container px={'sm'} fluid h={'100%'}>
        <Outlet />
      </Container>
    </AppShell>
  )
}

const useStyles = createStyles(() => {
  return {
    main: {
      backgroundColor: '#293340',
    },
  }
})
