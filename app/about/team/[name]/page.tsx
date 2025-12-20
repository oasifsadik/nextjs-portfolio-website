export default async function TeamMemberDetails({
    params
}: {
    params: {name: string}
}) {
    const name = (await params).name; 
  return (
    <div className="overflow-hidden">
      <h1 className="text-4xl text-white font-bold mb-4">Team Member {name}</h1>
      <p className="text-lg mb-4 text-white">Welcome to our e-commerce platform. We are dedicated to providing the best shopping experience.</p>
    </div>
  );
}