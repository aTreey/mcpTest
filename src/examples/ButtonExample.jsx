import React from 'react';
import Button from '../components/Button';

const ButtonExample = () => {
  const handleClick = (type) => {
    console.log(`${type} button clicked!`);
    alert(`${type} button clicked!`);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Button Component Examples</h1>
      
      {/* 按钮类型 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Button Types</h2>
        <div className="flex flex-wrap gap-2">
          <Button type="primary" onClick={() => handleClick('Primary')}>
            Primary
          </Button>
          <Button type="secondary" onClick={() => handleClick('Secondary')}>
            Secondary
          </Button>
          <Button type="danger" onClick={() => handleClick('Danger')}>
            Danger
          </Button>
          <Button type="success" onClick={() => handleClick('Success')}>
            Success
          </Button>
        </div>
      </section>
      
      {/* 按钮大小 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button type="primary" size="small">
            Small
          </Button>
          <Button type="primary" size="medium">
            Medium
          </Button>
          <Button type="primary" size="large">
            Large
          </Button>
        </div>
      </section>
      
      {/* 轮廓按钮 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Outline Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <Button type="primary" outline>
            Primary
          </Button>
          <Button type="secondary" outline>
            Secondary
          </Button>
          <Button type="danger" outline>
            Danger
          </Button>
          <Button type="success" outline>
            Success
          </Button>
        </div>
      </section>
      
      {/* 圆角按钮 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Rounded Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <Button type="primary" rounded>
            Rounded
          </Button>
          <Button type="secondary" rounded>
            Rounded
          </Button>
        </div>
      </section>
      
      {/* 禁用状态 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Disabled Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <Button type="primary" disabled>
            Disabled
          </Button>
          <Button type="primary" outline disabled>
            Disabled Outline
          </Button>
        </div>
      </section>
      
      {/* 全宽按钮 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Full Width Button</h2>
        <Button type="primary" fullWidth>
          Full Width Button
        </Button>
      </section>
    </div>
  );
};

export default ButtonExample;
