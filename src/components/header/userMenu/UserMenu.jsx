import useAuth from "hooks/useAuht";
import exit from "images/exit.svg";
import { Box } from "Box";
import { Text, Button, Icon } from "./UserMenu.styled";

const UserMenu = ({Modal}) => {
    const {user}  = useAuth();
    return (
        <Box display="flex" align-items="center">
            <Text>
                name
                {user?.name}
            </Text>
            
            <Button type='button' onClick={() => {
            Modal()}}>
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