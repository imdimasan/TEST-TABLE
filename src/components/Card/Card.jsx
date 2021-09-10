import "./Card.scss";
import { Text } from "components";

function Card({ data }) {
  return (
    <div className="card">
      <Text variant="h2">FULL INFO</Text>
      <Text variant="span">
        {data.id >= 0 ? `PROFILE: ${data.firstName} ${data.lastName}` : ""}
      </Text>
      <Text variant="span">
        {data.id >= 0 ? `DESCRIPTION: ${data.description}` : ""}
      </Text>
      <Text variant="span">
        {data.id >= 0 ? `ADDRESS: ${data.adress.streetAddress}` : ""}
      </Text>
      <Text variant="span">
        {data.id >= 0 ? `CITY: ${data.adress.zip}, ${data.adress.city}` : ""}
      </Text>
      <Text variant="span">{data.id ? `STATE: ${data.adress.state}` : ""}</Text>
      <Text variant="span">{data.id ? `PHONE: ${data.phone}` : ""}</Text>
    </div>
  );
}

export default Card;
