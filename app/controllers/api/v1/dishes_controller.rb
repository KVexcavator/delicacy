module Api
  module V1
    class DishesController < ApplicationController
      
      def index
        dishes = Dish.all
        render json: DishSerializer.new(dishes, options).serialized_json
      end

      def show
        dish = Dish.find_by(slug: params[:slug])
        render json: DishSerializer.new(dish, options).serialized_json
      end

      def create
        dish =Dish.new(dish_params)
        if dish.save
          render json: DishSerializer.new(dish).serialized_json
        else
          render json: { error: dish.errors.messages }, status: 422
        end
      end

      def update
        dish =Dish.find_by(slug: params[:slug])
        if dish.update(dish_params)
          render json: DishSerializer.new(dish, options).serialized_json
        else
          render json: { error: dish.errors.messages }, status: 422
        end
      end

      def destroy 
        dish =Dish.new(dish_params)
        if dish.destroy 
          head :no_content
        else
          render json: { error: dish.errors.messages }, status: 422
        end
      end 

      private

      def dish_params
        params.require(:dish).permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[rewiews] }
      end

    end
  end
end
