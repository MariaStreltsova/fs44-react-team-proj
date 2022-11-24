import useAuth from "hooks/useAuht";
import exit from "images/exit.svg";
import { Box } from "Box";
import { Text, Button, Icon } from "./UserMenu.styled";
import { useState } from "react";
import Modal from "../../Modal/Modal"

const UserMenu = () => {
    const { user } = useAuth();
    const [modalActive, setModalActive] = useState(true)
    return (
        <Box display="flex" align-items="center">
            <Text>
                name
                {user?.name}
            </Text>
            
        <Button type='button' onClick={() => setModalActive(true)}>
                <Icon
                    src={exit}
                    alt="exit"
                />
                Exit
            </Button>
            <Modal active={modalActive} setActive={setModalActive}/>
        </Box>
    )
};

export default UserMenu;