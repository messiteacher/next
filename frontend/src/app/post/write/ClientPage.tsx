"use client";
export default function ClinetPage() {
  async function write(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={write} className="flex flex-col w-1/4 gap-3">
        <input
          type="text"
          name="title"
          placeholder="제목 입력"
          className="border-2 border-black"
        />
        <textarea name="content" className="border-2 border-black"></textarea>
        <input type="submit" value="등록" />
      </form>
    </>
  );
}
