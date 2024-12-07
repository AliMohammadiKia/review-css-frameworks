import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Cards = () => {
  const information = Array.from(Array(10), (_, i) => i);

  return (
    <div className="grid grid-cols-1 gap-5 my-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {information.map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Card Title #{i + 1}</CardTitle>
            <CardDescription>Card Description #{i + 1}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content #{i + 1}</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer #{i + 1}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
