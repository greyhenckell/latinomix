import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface Inputs {
  email: string;
  password: string;
}

import { useSession, signIn, signOut } from "next-auth/react";

function Login() {
  const [login, setLogin] = useState(false);

  const { data: session } = useSession();
  console.log(session);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
    }
  };
  if (session) {
    console.log(session);
    return (
      <>
        <span>Signed as {session.user?.name}</span>
        <button
          onClick={() => signOut()}
          type="button"
          className="btn btn-primary"
        >
          Sign Out
        </button>
        {/* Pass session info to server component */}
      </>
    );
  } else {
    return (
      <Flex py={4} width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="test@test.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <Text color="red">This field is required</Text>
                )}
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="*******"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <Text color="red">password is required</Text>
                )}
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Sign In
              </Button>

              <Button
                width="full"
                mt={4}
                onClick={() => signIn()}
                type="button"
              >
                Sign In Other Options
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    );
  }
}

export default Login;
