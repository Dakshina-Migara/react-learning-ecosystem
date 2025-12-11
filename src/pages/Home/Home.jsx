import Button from "../../common/component/Button/Button";
import Profile from "../../common/component/Profilecard/Profile";
import TextField from "../../common/component/TextField/TextField";
import Card from "../../common/component/Card/Card";


export default function Home() {
    return (
        <div>
          
                <h1>Home Page</h1>

                <Button btnName={"Button 1"} color={"red"} onClick={() => console.log("Button 1 clicked")} />
                <Button btnName={"Button 2"} color={"green"} />
                <Button btnName={"Button 3"} color={"purple"} />


                <Profile color={"red"} />
                <Profile color={"green"} />
                <Profile />


                <TextField color={"aqua"} placeholder={'password'} type={'password'} onChange={(val) => console.log(val.target.value)} />
                <TextField color={"white"} placeholder={'email'} type={'text'} onChange={(val) => console.log(val.target.value)} />
                <TextField color={"yellow"} placeholder={'username'} type={'number'} onChange={(val) => console.log(val.target.value)} />

                <Card title={"acpt"} avatar={"https://i.imgur.com/1bX5QH6.jpg"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro qui, animi distinctio veritatis incidunt iusto placeat doloribus esse maiores repellat non blanditiis officiis ut numquam eum beatae temporibus quaerat assumenda?</p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button btnName={"Button 3"} color={"purple"} />
                        <Button btnName={"Button 3"} color={"purple"} />
                    </div>
                </Card>
        </div>
    )
}