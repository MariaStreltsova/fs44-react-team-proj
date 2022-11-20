import useAuth from "hooks/useAuht";
import exit from "images/exit.svg";
import { Box, Text, Button, Icon } from "./UserMenu.styled";

const UserMenu = () => {
    const {user}  = useAuth();
    return (
        <Box>
            <Text>
                name
                {user?.name}
            </Text>
            
            <Button type='button' onClick>
                <Icon
                    src={exit}
                    alt="exit"
                />
                Exit
            </Button>
        </Box>
    )
};

export default UserMenu;