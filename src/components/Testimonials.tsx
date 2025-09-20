import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Build by makers, loved by thousand citizens
          </h2>
          <p>
            Haat Ma Kanun is growing to be more than just a platform. It
            empowers people with verified advice and connects them directly to
            trusted legal experts
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 bg-[#222222] text-white">
            <CardHeader>
              <img
                className="h-6 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="Nike Logo"
                height="24"
                width="auto"
              />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Haat Ma Kanun is growing to be more than just a platform. It
                  empowers people with verified advice and connects them
                  directly to trusted legal experts.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHwwhttps://www.shutterstock.com/image-vector/tom-cruise-sunglass-vector-illustration-2197903493"
                      alt="Roshan Pokharel"
                      height="400"
                      width="400"
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <AvatarFallback>RP</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">Roshan Pokharel</cite>
                    <span className="text-muted-foreground block text-sm">
                      Business Owner
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 bg-transparent text-white">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Kanun is really extraordinary and very practical, no need to
                  break your head. A real gold mine.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHwwhttps://www.shutterstock.com/image-generated/want-profile-picture-black-data-analyst-2568388341"
                      alt="Bishal Kunwar"
                      height="400"
                      width="400"
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <AvatarFallback>BKM</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">
                      Bishal Kunwar Magar
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Software Engineer
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="bg-transparent text-white">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Great work on the product. This is one of the best personal
                  website that I have seen so far!
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3Dhttps://www.shutterstock.com/image-photo/set-circles-faces-casual-business-team-2167254735"
                      alt="Suprim Khatri"
                      height="400"
                      width="400"
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <AvatarFallback>SK</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium"></cite>Suprim Khatri
                    <span className="text-muted-foreground block text-sm">
                      Creator, Python Anywhere
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed bg-transparent text-white">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Great work on tailfolio template. This is one of the best
                  personal website that I have seen so far!
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Prashant Khatri"
                      height="400"
                      width="400"
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <AvatarFallback>PK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Prashant Khatri</p>
                    <span className="text-muted-foreground block text-sm">
                      Software Engineer
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
