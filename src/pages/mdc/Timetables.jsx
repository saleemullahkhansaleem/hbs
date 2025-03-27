import {
  Calendar,
  Download,
  Clock,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Timetables = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <Clock className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Timetables</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Access and download the latest class schedules for all MBBS and BDS
            programs at HBS Medical & Dental College.
          </p>
          <div className="mt-6 flex items-center">
            <Badge variant="" className="py-1">
              <Calendar className="mr-2 h-4 w-4" />
              Last Updated: 01-11-2024
            </Badge>
          </div>
        </div>
      </section>
      {/* <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-4">
            <Clock className="mr-2 h-6 w-6" />
            <h1 className="text-3xl md:text-4xl font-bold">Timetables</h1>
          </div>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            Access and download the latest class schedules for all MBBS and BDS
            programs at HBS Medical & Dental College.
          </p>
          <div className="mt-6 flex items-center">
            <Badge
              variant="outline"
              className="bg-blue-700 border-bg-primary text-white px-3 py-1 flex items-center"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Last Updated: 01-11-2024
            </Badge>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <Tabs defaultValue="mbbs" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
              <TabsTrigger value="mbbs">
                <BookOpen className="mr-2 h-5 w-5" />
                MBBS Section
              </TabsTrigger>
              <TabsTrigger value="bds">
                <GraduationCap className="mr-2 h-5 w-5" />
                BDS Section
              </TabsTrigger>
            </TabsList>

            {/* MBBS Section */}
            <TabsContent value="mbbs">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "1st Year MBBS",
                  "2nd Year MBBS",
                  "3rd Year MBBS",
                  "4th Year MBBS",
                  "Final Year MBBS",
                ].map((year, index) => (
                  <TimetableCard
                    key={index}
                    title={year}
                    downloadLink={`#${year.toLowerCase().replace(/\s+/g, "-")}`}
                  />
                ))}
              </div>
            </TabsContent>

            {/* BDS Section */}
            <TabsContent value="bds">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "1st Year BDS",
                  "2nd Year BDS",
                  "3rd Year BDS",
                  "Final Year BDS",
                ].map((year, index) => (
                  <TimetableCard
                    key={index}
                    title={year}
                    downloadLink={`#${year.toLowerCase().replace(/\s+/g, "-")}`}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Important Information
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                  <span className="text-primary text-sm font-medium">1</span>
                </div>
                <p>
                  Timetables are subject to change. Please check regularly for
                  updates.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                  <span className="text-primary text-sm font-medium">2</span>
                </div>
                <p>
                  All classes will start punctually as per the schedule.
                  Students are advised to arrive 10 minutes before class time.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3">
                  <span className="text-primary text-sm font-medium">3</span>
                </div>
                <p>
                  For any queries regarding the timetable, please contact the
                  Academic Office.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

// Timetable Card Component
const TimetableCard = ({ title, downloadLink }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md bg-muted">
      <CardHeader className=" pb-3">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-xs text-primary">
          Academic Year 2024-25
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <Clock className="h-5 w-5 mr-2 text-bg-primary" />
          <span>Weekly Schedule</span>
        </div>
        <p className="text-muted-foreground text-sm">
          Complete class schedule including lectures, labs, and clinical
          rotations.
        </p>
      </CardContent>
      <CardFooter className="border-t flex justify-between p-6">
        <span className="text-sm text-muted-foreground">PDF Format</span>
        <Button variant="" size="sm" className="">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Timetables;
