import Avatar from "../components/Avatar";
import Card from "../components/Card"

function Profile() {
  return (
    <>
      <Avatar></Avatar>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
    </>
  );
}

export default Profile;
