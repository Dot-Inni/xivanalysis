import {Trans} from '@lingui/react'
import {Overheal as CoreOverheal, TrackedOverhealOpts} from 'parser/core/modules/Overheal'
import React from 'react'

export class Overheal extends CoreOverheal {
	protected override trackedHealCategories: TrackedOverhealOpts[] = [
		{
			name: this.defaultCategoryNames.DIRECT_AND_REGEN_GCD_HEALS,
			trackedHealIds: [
				// Single-Target
				this.data.actions.CURE.id,
				this.data.actions.CURE_II.id,

				// AoE
				this.data.actions.MEDICA.id,
				this.data.actions.MEDICA_II.id,
				this.data.actions.MEDICA_III.id,
				this.data.actions.CURE_III.id,
			],
			includeInChecklist: true,
		},
		{
			name: this.defaultCategoryNames.DIRECT_HEALING_ABILITIES,
			trackedHealIds: [
				this.data.actions.TETRAGRAMMATON.id,
			],
			// Do not include this in the checklist because it's free, and we have no way of checking if the use was "wasted" or required to top up - subject to change
			// includeInChecklist: true,
		},
		{
			name: <Trans id="whm.overheal.afflatus.name">Afflatus Healing</Trans>,
			trackedHealIds: [
				this.data.actions.AFFLATUS_RAPTURE.id,
				this.data.actions.AFFLATUS_SOLACE.id,
			],
			ignore: true,
		},
		{
			name: this.defaultCategoryNames.HEALING_OVER_TIME,
			trackedHealIds: [
				this.data.actions.ASYLUM.id,
				this.data.statuses.ASYLUM.id,
				this.data.statuses.REGEN.id,
				this.data.statuses.DIVINE_AURA.id,
				this.data.statuses.MEDICA_II.id,
				this.data.statuses.MEDICA_III.id,
			],
		},
		{
			name: <Trans id="whm.overheal.liturgyofthebell.name">Liturgy of the Bell</Trans>,
			trackedHealIds: [
				this.data.actions.LITURGY_OF_THE_BELL_ON_DAMAGE.id,
				this.data.actions.LITURGY_OF_THE_BELL_ON_EXPIRY.id,
				this.data.actions.LITURGY_OF_THE_BELL_ACTIVATION.id,
			],
		},
		{
			name: this.defaultCategoryNames.OTHER_HEALING_ABILITIES,
			trackedHealIds: [
				this.data.actions.ASSIZE.id,
				this.data.actions.BENEDICTION.id,
				this.data.statuses.CONFESSION.id,
			],
		},
	]
}
