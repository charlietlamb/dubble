import { User } from '@ff/database'
import { atom } from 'jotai'

export const userAtom = atom<User | null>(null)
