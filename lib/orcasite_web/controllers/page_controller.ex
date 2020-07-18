defmodule OrcasiteWeb.PageController do
  use OrcasiteWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end


  def teachingui(conn, _params) do
    render conn, "teachingui.html"
  end
end
