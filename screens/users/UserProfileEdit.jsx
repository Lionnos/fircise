import { Avatar, Button, Center, FormControl, HStack, Input, Text, VStack } from "native-base"
import { View } from "react-native"

export const UserProfileEdit = ({ navigation }) => {
    return (
        <View style={{marginLeft: 10, marginRight: 10}}>
            <Center>
                <Avatar
                    bg="green.500"
                    size="2xl"
                    mt={50} mb={5}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/111304665?v=4"
                    }} />
                <Text fontSize="xl" fontWeight="bold">@Henry</Text>
                <HStack space={3} mt={2} mb={2}>
                    <Button bg="secondary.700" onPress={() => navigation.navigate('ProfileUserReport')}>Mis Reportes</Button>
                    <Button bg="muted.500" onPress={() => console.log("hello world")}>Actualizar</Button>
                </HStack>
            </Center>
            <VStack>
                <FormControl mb={2}>
                    <FormControl.Label>Nombre</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl mb={2}>
                    <FormControl.Label>Correo</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl mb={2}>
                    <FormControl.Label>Actualizar contraseña</FormControl.Label>
                    <Input mb={2} />
                    <Input />
                </FormControl>
            </VStack>

        </View>
    )
}