import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const teams = [
  {
    title: "Winson Li",
    description: "Professional Developer",
    content: "I am a very handsome guy and I go to school by bus",
    footer: "contact me by 0909090909",
  },
];

function Team() {
  return (
    <div className="container mt-2 grid md:grid-cols-2 md:gap-2 lg:grid-cols-4">
      {teams.map((e) => {
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{e.title}</CardTitle>
              <CardDescription>{e.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{e.content}</p>
            </CardContent>
            <CardFooter>
              <p>{e.footer}</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default Team;
