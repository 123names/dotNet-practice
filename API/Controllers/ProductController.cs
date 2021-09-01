using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductController : BaseApiController
    {
        private readonly DataContext context;
        public ProductController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppProduct>>> GetProducts(){
            return await this.context.Products.ToListAsync();
        }

        [HttpPost("addProduct")]
        public async Task<ActionResult<string>> AddToProductMenu(ProductDto productDto)
        {
            var newProduct = new AppProduct{
                Price = productDto.price,
                ProductName = productDto.ProductName,
                ProductDescription = productDto.ProductDescription
            };
            this.context.Products.Add(newProduct);
            await this.context.SaveChangesAsync();

            return "Product add successful";
        }
    }
}