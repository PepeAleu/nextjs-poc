import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '@/app/_components/Header'

vi.mock('next/router', () => ({
	useRouter: vi.fn(() => {
		return { pathname: '/', };
	}), // Mock useRouter
}))
test('Header component ', () => {
	render(<Header />)
	expect(screen.getByTestId('header-logo-link').getAttribute('href')).toBe('/')
})