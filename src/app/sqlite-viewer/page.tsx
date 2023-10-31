import MainTemplate from "@/components/main-template";
import SQLiteViewerPipeline from "@/components/pipeline/sqlite-viewer-pipeline";
import { useEffect } from "react";

export const metadata = {
  title: 'SQLiteファイルのブラウザビュワー',
  robots: {
    index: false,
  },
};

export default function SQLiteViewer() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      SQLite3のファイルをブラウザ上で閲覧することができるページです。
    </div>
    <SQLiteViewerPipeline></SQLiteViewerPipeline>
  </MainTemplate>
  );
}