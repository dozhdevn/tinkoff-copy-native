import { IMoreItem } from "../../../../interfaces"

const startUrl = 'https://www.tinkoff.ru'

export const menu: IMoreItem[] = [
	{
		title: 'ATM machines',
		description: 'Search for Tinkoff ATMs and other banks on the map',
		iconName: 'account-balance',
		link: `${startUrl}/maps/atm/`,
	},
	{
		title: 'Top-up points',
		description: 'Cash replenishment in rubles, dollars, euros',
		iconName: 'credit-card',
		link: `${startUrl}/maps/payment/`,
	},
	{
		title: 'Ordering certificates',
		description: 'Account statements by e-mail and in paper form',
		iconName: 'find-in-page',
		link: `${startUrl}/cards/debit-cards/tinkoff-black/help/get-statement/reference/`,
	},
	{
		title: 'For business',
		description: 'Online banking for small businesses',
		iconName: 'business',
		link: `${startUrl}/business/`,
	},
	{
		title: 'Communication',
		description:
			'By e-mail and in social networks, call via the Internet and by phone',
		iconName: 'chat-bubble',
		link: `${startUrl}/contacts/`,
	},
]