import {Typography} from "@mui/material";
import {getServerSession} from "next-auth";
import {authOptions} from "@/auth/auth";

export default async function Home() {
    const session = await getServerSession(authOptions);
  return (
      <>
          <Typography>Hello World</Typography>
          <Typography>{JSON.stringify(session?.user)}</Typography>
      </>
  )
}
