import { action, makeObservable, observable } from "mobx"
import { ICard } from "../interfaces"
import { CardsService } from "../services/CardsService"

export class CardsStore {
  cards: ICard[] = []

  cardsLoading: boolean = false

  constructor() {
    makeObservable(this, {
      cards: observable,
      cardsLoading: observable,
      getCards: action,
      setCards: action,
      addCard: action
    })
  }

  getCards = async () => {
    try {
      this.cardsLoading = true
      const data = await CardsService.getCards()
      this.setCards(data)
    } catch (error) { 
      console.log('Ошибка при загрузке банковский карт')
    }
  }

  setCards = (data: ICard[]) => {
    this.cardsLoading = false
    this.cards = data
  }

  addCard = async (data: ICard) => {
    try {
      this.cardsLoading = true
      await CardsService.addCard(data)
      this.getCards()
    } catch (error) {
      console.log('Ошибка при добавлении банковской карты')
    }
  }
}

export default new CardsStore()