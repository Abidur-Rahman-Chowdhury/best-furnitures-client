import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center mt-10 text-4xl font-bold mb-4">
        Question And Answer{' '}
      </h2>

      <div className="grid container gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="border p-4 rounded-md">
          <h2 className="font-bold text-xl mb-3">
            Difference Between JavaScript and NodeJS?
          </h2>

          <h3>
            <span className="font-bold">Answer: </span>JavaScript is a
            lightweight, cross-platform, interpreted scripting programming
            language that is primarily used for client-side scripting. It's
            built into both Java and HTML. On the other hand, Node. js is a
            server-side scripting language based on the Google Chrome V8 engine.
          </h3>
        </div>
        <div className="border  p-4 rounded-md">
          <h2 className="font-bold text-xl mb-3">
            When should you use nodeJs and when should you use mongodb?
          </h2>
          <h3>
            <span className="font-bold">Answer: </span>
            <br /> <br /> <span className="font-bold">NodeJs</span> নোড জেএস
            মূলত নন ব্লকিং জাভাস্ক্রিপট রান টাইম । নোড জেএস এর এরকম ব্যবহার এর
            কারণে সার্ভার সাইড ল্যাংগুয়েজ হিসেবে ব্যবহরিত হয়। নোড জেএস এর ব্যপক
            ব্যবহার হলো রিয়েল টাইম এপ্লিকেশন বিল্ড এর ক্ষেত্রে। উদাহরণ সরূপ বলা
            যায় যে এপ্লিকেশন এর মধ্যে ইউজার খুব দ্রুত সার্ভারে রিকুয়েস্ট পাঠাই
            এবং সার্ভার দ্রুত ইউজারকে ডাটা প্রেরণ করে। যে সকল ক্ষেত্রে অনেক ডাটা
            নিয়ে কাজ করতে হয় এবং ডাটা প্রসেস করে রেজাল্ট প্রদান করা হয় সে সব
            কেইসে নোড জেএস ব্যবহার উত্তম নয়। <br /> <br />
            <span className="font-bold">MongoDB:</span> মংগোডিবি আমরা ব্যবহার
            করবো যখন আমাদের ডাটা ডকুমেন্ট কেন্দ্রিক এবং রিলেশনাল ডাটাবেসের
            স্কিমার সাথে ভালভাবে ফিট করে না। যখন আমাকে বিশাল স্কেল মিট্মাট করতে
            হবে এবং যখন আমি দ্রুত প্রোটোটাইপ করবো এই সব ক্ষেত্রে মংগোডিবি
            ডাটাবেইস ইউজ করা ভাল এবং প্রায় সকলেই এইটা করে থাকে।
          </h3>
        </div>
        <div className="border p-4 rounded-md">
          <h2 className="font-bold text-xl mb-3">
            Difference Between Sql and NoSql database?
          </h2>

          <h3>
            <span className="font-bold">Answer: </span> <br />
            <h2 className="text-center mb-2 font-bold">Sql VS NoSql</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="border border-black">
                <p className="mb-2">
                  রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম (RDBMS)
                </p>
                <p className="mb-2">এই ডাটাবেসের পূর্বনির্ধারিত স্কিমা আছে</p>
                <p className="mb-2">
                  এই ডাটাবেস শ্রেণীবদ্ধ ডেটা রাখার জন্য উপযুক্ত না।
                </p>
              </div>
              <div className="border border-black">
                <p className="mb-2">
                  নন-রিলেশনাল বা ডিস্ট্রিবিউটেড ডাটাবেস সিস্টেম।
                </p>
                <p className="mb-2">এদের স্কিমা ডাইনামিক</p>
                <p className="mb-2">
                  এই ডাটাবেসগুলি শ্রেণীবদ্ধ ডেটা রাখার জন্য সবচেয়ে ব্যবহার হয়
                </p>
              </div>
            </div>
          </h3>
              </div>
              <div className="border p-4 rounded-md">
          <h2 className="font-bold text-xl mb-3">
          What is the purpose of jwt and how does it work
          </h2>

          <h3>
            <span className="font-bold">Answer: </span> jwt হলো একধরনের টোকেন যা ক্লায়েন্ট এবং সার্ভার এর মধ্যে ডাটা আদান প্রদান এর সময় সিকিউরিটি বৃদ্ধি করতে ব্যবহার করা হয়। এর মাধ্যমে সার্ভার যাচাই করে যে ডাটার জন্য রিকুয়েস্ট পাঠিয়েছে সে কি আসল ক্লায়েন্ট কিনা আমি সঠিক ব্যক্তিকে ডাটা প্রেরণ করছি কিনা। এটার কার্যপ্রণালি হলো ইউজার যখন লগ ইন করে এই টোকেন এর একটা কপি ইউজার এর ব্রাউজারে সেইভ থাকে এবং আরেক কপি ডাটাবেইস এ সেইব থাকে। প্রতিবার ইউজার যখন ডাটার জন্য রিকুয়েস্ট পাঠায় তখন সাথে টোকেন ও পাঠানো হয়  সার্ভার টোকেন এর সাথে মিলিয়ে দেখে টোকেন ঠিক আছে কিনা ঠিক থাকলে ডাটা প্রেরণ করে এবং ভুল হলে এরর ম্যাসেজ পাঠিয়ে দেই। কোন সময় এই টোকেন এর মেয়াদ শেষ হয়ে গেলে নতুন করে টোকেন জেনারেট করা হয়।
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
