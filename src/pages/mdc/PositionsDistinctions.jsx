import {
  Trophy,
  Award,
  Star,
  GraduationCap,
  Medal,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PositionsDistinctions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <Trophy className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Positions & Distinctions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Celebrating the academic excellence of our students
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Academic Achievements</h2>
            <p className="text-muted-foreground mb-8">
              Our students are securing positions in Shaheed Zulfiqar Ali Bhutto
              Medical University (SZABMU) Islamabad since beginning. We take
              pride in their outstanding academic performance and dedication to
              excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg w-[180px]">
                <Trophy className="h-10 w-10 text-primary mb-2" />
                <span className="text-3xl font-bold text-primary">20+</span>
                <span className="text-sm text-muted-foreground">
                  University Positions
                </span>
              </div>

              <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg w-[180px]">
                <Star className="h-10 w-10 text-primary mb-2" />
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-sm text-muted-foreground">
                  Distinctions
                </span>
              </div>

              <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg w-[180px]">
                <GraduationCap className="h-10 w-10 text-primary mb-2" />
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Pass Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions by Session */}
      <section className="py-12 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              University Positions by Session
            </h2>

            <Tabs defaultValue="2019-2020" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="2016">2016</TabsTrigger>
                <TabsTrigger value="2017">2017</TabsTrigger>
                <TabsTrigger value="2018">2018</TabsTrigger>
                <TabsTrigger value="2019">2019</TabsTrigger>
                <TabsTrigger value="2019-2020">2019-2020</TabsTrigger>
              </TabsList>

              {/* Session 2016 */}
              <TabsContent value="2016">
                <Card className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">Session 2016</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      HBS Medical & Dental College only had 1st Year M.B.B.S.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS FIRST PROFESSIONAL ANNUAL EXAMINATION 2016
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">42225</td>
                            <td className="border px-4 py-2">
                              0048/HBS/MBBS-2015
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Maryam Abbas
                            </td>
                            <td className="border px-4 py-2">Ghulam Abbas</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                First
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Session 2017 */}
              <TabsContent value="2017">
                <Card className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">Session 2017</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      HBS Medical & Dental College only had 1st Year and 2nd
                      Year M.B.B.S. consisting of 100 students in each class.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS FIRST PROFESSIONAL ANNUAL MODULAR EXAMINATION 2017
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Syeda Rahlma Bokhari
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                Third
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS SECOND PROFESSIONAL ANNUAL EXAMINATION 2017
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">42225</td>
                            <td className="border px-4 py-2">
                              0048/HBS/MBBS-2015
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Maryam Abbas
                            </td>
                            <td className="border px-4 py-2">Ghulam Abbas</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Session 2018 */}
              <TabsContent value="2018">
                <Card className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">Session 2018</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      HBS Medical & Dental College only had 1st Year, 2nd Year
                      and 3rd Year M.B.B.S. consisting of 100 students in each
                      class.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS FIRST PROFESSIONAL ANNUAL MODULAR EXAMINATION 2018
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">23047</td>
                            <td className="border px-4 py-2">
                              251/HBS/MBBS-2017
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Mehwish Rafique
                            </td>
                            <td className="border px-4 py-2">
                              Muhammad Rafique
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                First
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Fatima Bokhari
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Maria Abdullah
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS SECOND PROFESSIONAL ANNUAL MODULAR EXAMINATION 2018
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Syeda Rahima Bokhari
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">34053</td>
                            <td className="border px-4 py-2">
                              0151/HBS/MBBS-2018
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Mohammad Nouman Haidar
                            </td>
                            <td className="border px-4 py-2">
                              Rizwan Haidar Javed
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                Third
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS SECOND PROFESSIONAL ANNUAL EXAMINATION 2018
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">42225</td>
                            <td className="border px-4 py-2">
                              0048/HBS/MBBS-2015
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Maryam Abbas
                            </td>
                            <td className="border px-4 py-2">Ghulam Abbas</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                First
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Maheen
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Session 2019 */}
              <TabsContent value="2019">
                <Card className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">Session 2019</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      HBS Medical & Dental College only had 1st Year, 2nd Year,
                      3rd Year and 4th Year of M.B.B.S. consisting of 100
                      students in each class and only 1st Year of BDS.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS First Professional (1st year) Modular System
                      Examination 2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">12074</td>
                            <td className="border px-4 py-2">
                              0416/HBS/MBBS-2018
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Sabeeha Nur Ul Huda
                            </td>
                            <td className="border px-4 py-2">
                              Asmat Ullah Malik
                            </td>
                            <td className="border px-4 py-2">1011</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                Third
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS Second Professional (2nd year) Annual Examination
                      2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">23047</td>
                            <td className="border px-4 py-2">
                              251/HBS/MBBS-2017
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Mehwish Rafique
                            </td>
                            <td className="border px-4 py-2">
                              Muhammad Rafique
                            </td>
                            <td className="border px-4 py-2">1075</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS Third Professional (3rd year) Annual Examination 2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">34053</td>
                            <td className="border px-4 py-2">
                              0151/HBS/MBBS-2018
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Muhammad Nauman Haidar
                            </td>
                            <td className="border px-4 py-2">
                              Rizwan Haidar Javed
                            </td>
                            <td className="border px-4 py-2">1061</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                Third
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS Fourth Professional (4th year) Annual Examination
                      2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1000
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">42225</td>
                            <td className="border px-4 py-2">
                              0048/HBS/MBBS-2015
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Maryam Abbas
                            </td>
                            <td className="border px-4 py-2">Ghulam Abbas</td>
                            <td className="border px-4 py-2">884</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">42223</td>
                            <td className="border px-4 py-2">
                              0046/HBS/MBBS-2015
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Madiha Hameed Abbasi
                            </td>
                            <td className="border px-4 py-2">
                              Abdul Hameed Abbasi
                            </td>
                            <td className="border px-4 py-2">867</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                Third
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Session 2019-2020 */}
              <TabsContent value="2019-2020">
                <Card className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">
                      Session 2019-2020
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      HBS Medical & Dental College only had 1st Year, 2nd Year,
                      3rd Year, 4th Year and 5th Year of M.B.B.S. consisting of
                      100 students in each class and only 1st Year and 2nd Year
                      of BDS.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS First Professional (1st year) Modular System
                      Examination 2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Emaan Masood
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS Second Professional (2nd year) Annual Examination
                      2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">23047</td>
                            <td className="border px-4 py-2">
                              251/HBS/MBBS-2017
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Mehwish Rafique
                            </td>
                            <td className="border px-4 py-2">
                              Muhammad Rafique
                            </td>
                            <td className="border px-4 py-2">1075</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS Third Professional (3rd year) Annual Examination 2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">23047</td>
                            <td className="border px-4 py-2">
                              251/HBS/MBBS-2017
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Mehwish Rafique
                            </td>
                            <td className="border px-4 py-2">
                              Muhammad Rafique
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                First
                              </span>
                            </td>
                          </tr>
                          <tr className="bg-muted/50">
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Haider Rashid
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Fatima Bukhari
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                Third
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS Fourth Professional (4th year) Annual Examination
                      2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1000
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Syeda Rahima Bokhari
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                First
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      MBBS Fourth Professional (Final year) Annual Examination
                      2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1000
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              0048/HBS/MBBS-2015
                            </td>
                            <td className="border px-4 py-2 font-medium">
                              Maryam Abbas
                            </td>
                            <td className="border px-4 py-2">Ghulam Abbas</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                                Second
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      BDS First Professional (1st year) Modular System
                      Examination 2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Muhammad Bin Umar
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                Third
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      BDS First Professional (2nd year) Modular System
                      Examination 2019
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">
                              Roll No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Registration No.
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Candidate Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Father's Name
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Obt. Marks/1200
                            </th>
                            <th className="border px-4 py-2 text-left">
                              Position
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2 font-medium">
                              Faiza Tahir
                            </td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                Third
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Distinctions Section */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Distinctions</h2>
              <Button variant="outline" className="group">
                See All Distinctions
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Medal className="h-5 w-5 text-primary mr-2" />
                    MBBS Program Distinctions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Maryam Abbas</span> -
                        Distinction in Anatomy, Physiology, and Biochemistry
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Mehwish Rafique</span> -
                        Distinction in Pathology and Pharmacology
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          Syeda Rahima Bokhari
                        </span>{" "}
                        - Distinction in Community Medicine
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          Muhammad Nauman Haidar
                        </span>{" "}
                        - Distinction in Surgery
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">
                          Madiha Hameed Abbasi
                        </span>{" "}
                        - Distinction in Medicine
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Medal className="h-5 w-5 text-primary mr-2" />
                    BDS Program Distinctions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Muhammad Bin Umar</span> -
                        Distinction in Dental Anatomy
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Faiza Tahir</span> -
                        Distinction in Dental Materials
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                Join Our Legacy of Excellence
              </h2>
              <p className="text-primary-foreground/70">
                Be part of a tradition of academic achievement and professional
                excellence
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant=""
                className="border-primary-foreground border text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
