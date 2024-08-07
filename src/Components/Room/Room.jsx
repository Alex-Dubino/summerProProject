import "./Room.scss";
import { v4 as uuidv4 } from "uuid";
import room from "../../dt/rooms.json";
export default function Room() {
  return (
    <div className="room__glavitem">
      {room.map((item) => (
        <div className="room" key={uuidv4()}>
          <img src={item.img} alt="" />
          <div className="room-description">
            <span>{item.title}</span>
            <span>{item.area}</span>
            <span>{item.price}</span>
            <span>{item.furniture}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
