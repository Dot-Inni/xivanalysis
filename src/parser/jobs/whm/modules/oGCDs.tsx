//import {Trans} from '@lingui/react'
//import {DataLink} from 'components/ui/DbLink'
import {dependency} from 'parser/core/Injectable'
import {CooldownDowntime} from 'parser/core/modules/CooldownDowntime'
import Suggestions from 'parser/core/modules/Suggestions'
//import React, {Fragment} from 'react'

const DPS_TARGET_PERCENT = 75

export class OGCDs extends CooldownDowntime {
	@dependency private suggestions!: Suggestions

	trackedCds = [
		{cooldowns: [this.data.actions.ASSIZE], weight: 1},
		{cooldowns: [this.data.actions.PRESENCE_OF_MIND], weight: 1},
	]
	override checklistTarget = DPS_TARGET_PERCENT
}
