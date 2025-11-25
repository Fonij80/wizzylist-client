import { BackBtn } from "@/components/ui/extra";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <BackBtn />
      <h1 className="text-3xl font-bold mb-4 text-center">About WizzyList</h1>
      <p className="text-center text-gray-500 mb-10">
        The smart, beautiful way to share what you really want.
      </p>

      <section className="space-y-6">
        <p>
          <strong>WizzyList</strong> was created from a simple idea:{" "}
          <em>gift-giving should be joyful, not stressful.</em> Whether it’s
          your birthday, wedding, or a random Tuesday, we believe you should be
          able to share what you love — easily, beautifully, and without
          awkwardness.
        </p>

        <p>
          We’ve all been there: you get a gift that doesn’t quite match your
          taste. Or you’re the one doing the gifting and feel unsure what to
          buy. WizzyList fixes that by giving everyone a simple, magical link
          that speaks their wishes out loud.
        </p>

        <p>
          In under a minute, you can create a wishlist, personalize it with
          notes and links, and share it with anyone. No sign-up required. No
          pressure. Just gifting done right.
        </p>

        <p>
          Our mission is to make gifting more intentional, more personal, and
          more fun. We’re starting with a lightweight wishlist, but dreaming of
          a future where WizzyList is your go-to space for celebrating yourself
          and others — in real life, or across the world.
        </p>

        <p className="font-semibold">
          Built with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/foroozan-iraji"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fonij
          </a>{" "}
          who loves to turn ideas into working softwares.
        </p>
      </section>
    </div>
  );
};
