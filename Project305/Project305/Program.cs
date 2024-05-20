using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Project305.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<Project305Context>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Project305Context") ?? throw new InvalidOperationException("Connection string 'Project305Context' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("ReactPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
