class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :update, :edit, :destroy ]

  def index
    render json: Menu.all
  end

  def show
    render json: @menu
  end

  def create
    @menu = Menu.new(menu_params)
    if @menu.save
      render json: @menu, status: :created
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  def update
    if @menu.update
      render json: @menu 
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  def destroy 
    @menu.destroy
  end 

  private

  def set_menu
    @menu = Menu.find(params[:id])
  end 

  def menu_params
    params.require(:menu).permit(:item, :price, :description)
  end 
end
