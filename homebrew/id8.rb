class Id8 < Formula
  desc "Platform CLI for GitOps-based platform engineering"
  homepage "https://github.com/project-id8/cli"
  version "0.1.0"
  license "MIT"  # Based on your README mentioning MIT license

  livecheck do
    url :stable
    strategy :github_latest
  end

  if OS.mac? && Hardware::CPU.arm?
    url "https://github.com/project-id8/cli/releases/download/v#{version}/id8-darwin-arm64.tar.gz"
    sha256 "REPLACE_WITH_ACTUAL_SHA" # arm64_darwin
  elsif OS.mac? && Hardware::CPU.intel?
    url "https://github.com/project-id8/cli/releases/download/v#{version}/id8-darwin-amd64.tar.gz"
    sha256 "REPLACE_WITH_ACTUAL_SHA" # amd64_darwin
  elsif OS.linux? && Hardware::CPU.intel?
    url "https://github.com/project-id8/cli/releases/download/v#{version}/id8-linux-amd64.tar.gz"
    sha256 "REPLACE_WITH_ACTUAL_SHA" # amd64_linux
  elsif OS.linux? && Hardware::CPU.arm?
    url "https://github.com/project-id8/cli/releases/download/v#{version}/id8-linux-arm64.tar.gz"
    sha256 "REPLACE_WITH_ACTUAL_SHA" # arm64_linux
  end

  def install
    bin.install "id8"
  end

  test do
    assert_match "id8 version #{version}", shell_output("#{bin}/id8 --version")
  end
end 