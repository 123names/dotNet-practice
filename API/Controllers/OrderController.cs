using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.DTOs.OutDTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class OrderController:BaseApiController
    {
        private readonly DataContext context;
        public OrderController(DataContext context)
        {
            this.context = context;
        }
        [HttpPost("addOrder")]
        public async Task<ActionResult<ResponseDto>> AddNewOrder(OrderDto orderDto)
        {
            foreach (var orderItem in orderDto.productsList){
                var newOrder = new AppOrder{
                    userId = orderDto.userId,
                    productQuantity = orderItem.quantity,
                    productId = orderItem.product.id
                };
                this.context.Orders.Add(newOrder);
            }
            await this.context.SaveChangesAsync();

            return new ResponseDto{ 
                message = "Order Proceed successful",
            };
        }
    }
}