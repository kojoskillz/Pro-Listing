import TextReveal from "../components/ui/text-reveal";

export default function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-42 text-center items-center justify-center bg-black dark:bg-black">
      <TextReveal text="With transparent pricing and a seamless process, we make your success our priority.
                       Lets take your crypto business to the next level.
      " />
    </div>
  );
}
