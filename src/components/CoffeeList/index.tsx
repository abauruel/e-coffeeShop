import { CoffeeItem } from "../CoffeeItem";
import { Wrapper } from "./styles";
import coffees from '../../../coffeeitems.json'
export function CoffeeList() {
  return (
    <Wrapper>
      <h1>Nossos cafés</h1>
      <div>

        {coffees.map(coffee => (
          <CoffeeItem
            key={coffee.name}
            name={coffee.name}
            description={coffee.description}
            types={coffee.type}
            price={Number(coffee.price)}
            uri={`/assets/coffeetypes/${coffee.uri}`}
          />
        ))}
      </div>
    </Wrapper>
  )
}