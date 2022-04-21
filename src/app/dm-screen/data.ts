import { Action } from "./action";

interface DmScreenData {
  actions: Action[]
}

export const dmScreenData: DmScreenData = {
  actions: [
    {
      action: 'Attack',
      description: 'You make a melee or ranged weapon attack'
    },
    {
      action: 'Cast a Spell',
      description: 'You cast a cantrip or a spell of 1st level or higher. See the spell\'s casting time.'
    },
    {
      action: 'Dash',
      description: 'You gain extra movement equal to your speed (plus any modifiers) for the current turn.'
    },
    {
      action: 'Disengage',
      description: 'Your movement doesn\'t provoke opportunity attacks for the rest of the turn.'
    },
    {
      action: 'Dodge',
      description: 'Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage. You lose this benefit if you are incapacitatd or if your speed drops to 0.'
    },
    {
      action: 'Help',
      description: 'You help one creature with a task, giving that creature advantage on the next ability check it makes for that task. Or you distract one creature within 5 feet of you, and the next attack roll that an ally of yours makes against that creature has advantage. Whichever option you choose, the advantage goes away once used or when your next turn starts.'
    },
    {
      action: 'Hide',
      description: 'You make a Dexterity (Stealth) check in an attempt to become hidden - unseen and unheard.'
    },
    {
      action: 'Ready',
      description: 'You wait for a particular circumstance before you act, which lets you act using your reaction before the start of your next turn. You must decide in advance (a) what perceivable circumstance will trigger your reaction and (b) the action you will take in response to that trigger. If you ready a spell, if must have a casting time of 1 action, and you must concentrate on it until you release it.'
    },
    {
      action: 'Search',
      description: 'You make a Wisdom (Perception) check or an Intelligence (Investigation) check to find something.'
    },
    {
      action: 'Use a Magic Item',
      description: 'You use a magic item that requires your action for its use.'
    },
    {
      action: 'Use an Object',
      description: 'You use an object, other than a magic item, that requires your action for its use.'
    },
    {
      action: 'Use a Special Ability',
      description: 'You use a class feature or other special ability that requires your action for its use.'
    }
  ]
}