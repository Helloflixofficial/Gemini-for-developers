import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <div>This is Navbar</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
