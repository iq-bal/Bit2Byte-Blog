import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Timeline } from "@/components/ui/timeline";
import { getSyllabus } from "@/lib/api";

const syllabus = async () => {
  const data = await getSyllabus();

  const dataEntry = data?.data.map((item: any) => ({
    title: item.topic_name,
    content: (
      <div>
        <ul >
          <HoverEffect
            className={"bg-white dark:bg-neutral-950"}
            topicId={item.id.toString()}
            items={item.sub_topics.map((subItem: any) => ({
              title: subItem.sub_topic_name,
              id:subItem.id.toString(),
              description: "",
              link: "",
            }))}
          />
        </ul>
      </div>
    ),
  }));

  return (
    <div>
      <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 pb-[80vh]">
        {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                Syllabus
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                Here&apos;s the syllabus for the Bit2Byte Mission.
            </p>
            </div> */}
        {/* <p>{JSON.stringify(data?.data)}</p> */}
        <div className="relative max-w-7xl mx-auto pb-20">
          <Timeline data={dataEntry} />
        </div>
      </div>
    </div>
  );
};

export default syllabus;
