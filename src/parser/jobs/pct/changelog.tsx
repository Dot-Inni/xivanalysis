import {DataLink} from 'components/ui/DbLink'
import CONTRIBUTORS from 'data/CONTRIBUTORS'
import React from 'react'

export const changelog = [
	// {
	// 	date: new Date('2021-11-19'),
	// 	Changes: () => <>The changes you made</>,
	// 	contributors: [CONTRIBUTORS.YOU],
	// },
	{
		date: new Date('2024-07-07'),
		Changes: () => <>Add <DataLink showIcon={false} action="TEMPERA_GRASSA" /> to Defensives tracking and handle cooldown refunding on shield break from it and <DataLink showIcon={false} action="TEMPERA_COAT" />.</>,
		contributors: [CONTRIBUTORS.AKAIRYU],
	},
	{
		date: new Date('2024-07-03'),
		Changes: () => <>Initial data and core module support for PCT</>,
		contributors: [CONTRIBUTORS.AKAIRYU],
	},
]