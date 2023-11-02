import MainTemplate from "@/components/main-template";
import SQLiteViewerPipeline from "@/components/pipeline/sqlite-viewer-pipeline";
import ValidatorPacPipeline from "@/components/pipeline/validator-pac-pipeline";
import { useEffect } from "react";

export const metadata = {
  title: 'プロキシー自動設定ファイルの簡易検証ツール',
};

export default function ValidatorPac() {
  return (
  <MainTemplate title={metadata.title}>
    <div>
      プロキシー自動設定 (Proxy Auto-Configuration, PAC) ファイルを検証することができるWebツールです。
      <a target="_blank" href="https://developer.mozilla.org/ja/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file">プロキシー自動設定</a>
    </div>
    <ValidatorPacPipeline></ValidatorPacPipeline>
  </MainTemplate>
  );
}