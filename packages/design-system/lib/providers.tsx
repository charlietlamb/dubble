import { RiInstagramFill, RiTiktokFill, RiYoutubeFill } from '@remixicon/react'
import DashboardConnectYoutube from '@dubble/design-system/components/dashboard/connect/youtube/dashboard-connect-youtube'

export const providerData = [
  {
    name: 'YouTube',
    company: 'Google',
    start: 'https://www.youtu.be/',
    placeholder: 'your-video-id',
    icon: <RiYoutubeFill />,
    button: <DashboardConnectYoutube />,
    className:
      'bg-social-youtube/80 hover:bg-social-youtube group-hover:bg-social-youtube',
    classNameInner: 'text-social-youtube',
    error: 'Please enter a valid YouTube video URL.',
  },
  {
    name: 'Instagram',
    company: 'Meta',
    start: 'https://instagram.com/',
    placeholder: 'your-video-id',
    icon: <RiInstagramFill />,
    button: null,
    className:
      'bg-social-instagram/80 hover:bg-social-instagram group-hover:bg-social-instagram',
    classNameInner: 'text-social-instagram',
    error: 'Please enter a valid Instagram video URL.',
  },
  {
    name: 'Tiktok',
    company: 'ByteDance',
    start: 'https://tiktok.com/',
    placeholder: 'your-video-id',
    icon: <RiTiktokFill />,
    button: null,
    className:
      'bg-social-tiktok/80 hover:bg-social-tiktok group-hover:bg-social-tiktok',
    classNameInner: 'text-social-tiktok',
    error: 'Please enter a valid Tiktok video URL.',
  },
] as ProviderData[]

export const providerDataByName = providerData.reduce((acc, platform) => {
  acc[platform.name] = platform
  return acc
}, {} as Record<Provider, ProviderData>)

export type Provider = ProviderData['name']

export type ProviderData = {
  name: string
  company: string
  start: string
  placeholder: string
  icon: React.ReactNode
  button: React.ReactNode
  className: string
  classNameInner: string
  error: string
}
